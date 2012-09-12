<?php
 
/**
 * @property SprintModel $sprintModel
 * @property Utils $utils
 * @author Rafael
 *
 */
use models\entities\Sprint;

class Sprints extends CI_Controller {
	
	public function __construct() {
		parent::__construct();
		$this->load->model("SprintModel", "sprintModel");
	}
	
	public function all() {
		$sprintList = $this->sprintModel->findAll();
		echo $this->utils->returnsSuccess($sprintList);
	}
	
	public function index() {
		$sprintList = $this->sprintModel->findAll();
		
		if (count($sprintList) > 0) {
			foreach ($sprintList as $sprint) {
				echo "<p>";
				echo $sprint->getName() .  '<br />';
				foreach ($sprint->getStories() as $story) {
					echo $story->getName() . '<br />'; 	
				}
				echo "<p>";
			}
		} else {
			echo "Não há sprints cadastradas.";
		}
	}
	
	
	public function save() {
		$data = (array) json_decode($_POST['data']);
		$sprint = $this->sprintModel->save($data);
		$this->utils->returnsSuccess($sprint);
	}
	
}