<?php
 
use models\entities\Sprint;

use models\dao\SprintDAO;

/**
 * @property SprintDAO $sprintDAO
 * @property DateUtil $dateutil
 * @property StoryModel $storyModel
 * @author Rafael
 *
 */
class SprintModel extends CI_Model {
	
	private $sprintDAO;
	
	public function __construct() {
		parent::__construct();
		$this->load->model("StoryModel", "storyModel");
		$this->sprintDAO = new SprintDAO($this->doctrine->em);
	}
	
	public function findByPrimaryKey($id) {
		return $this->sprintDAO->findByPrimaryKey($id);
	}
	
	public function findAll() {
		return $this->sprintDAO->findAll();
	}
	
	public function save($data) {
		$sprint = new Sprint();
		if (!empty($data['id'])) {
			$sprint->setId($data['id']);
		}
		$sprint->setName($data['name']);
		
		$sprint->setStartDate($this->dateutil->strToDate($data['startDate'], '00:00:00'));
		$sprint->setEndDate($this->dateutil->strToDate($data['endDate'], '23:59:59'));
		
		$stories = $data['stories'];
		
		
		if (is_array($stories)) {
			foreach ($stories as $story) {
				$sprint->addStory($this->storyModel->arrayToStory((array) $story));
			}
		}
		
		$this->sprintDAO->save($sprint);
		return $sprint;
	}
	
	public function delete($sprint) {
		$this->sprintDAO->delete($sprint);
	}
	
}