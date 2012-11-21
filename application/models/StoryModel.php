<?php

use models\entities\Project;

use models\dao\CategoryDAO;

use models\dao\ProjectDAO;

use models\entities\Category;

use models\entities\Story;

use models\dao\StoryDAO;

use models\dao\UserDAO;

/**
 * @property StoryDAO $storyDAO
 * @property ProjectDAO $projectDAO
 * @property UserDAO $userDAO
 * @author Rafael
 *
 */
class StoryModel extends CI_Model {
	
	private $storyDAO;
	private $userDAO;
	private $projectDAO;
	private $categoryDAO;
	
	public function __construct() {
		parent::__construct();
		$this->storyDAO = new StoryDAO($this->doctrine->em);
		$this->projectDAO = new ProjectDAO($this->doctrine->em);
		$this->userDAO = new UserDAO($this->doctrine->em);
		$this->categoryDAO = new CategoryDAO($this->doctrine->em);
	}
	
	public function findByPrimaryKey($id) {
		return $this->storyDAO->findByPrimaryKey($id);
	}
	
	public function findAll() {
		return $this->storyDAO->findAll();
	}
	
	public function findByProject($projectId) {
		return $this->storyDAO->findByProject($projectId);
	}
	
	public function save($data) {
		$story = $this->arrayToStory($data);
		
		$currentProject = $this->session->userdata('currentProject');
		$project = new Project();
		$project->setId($currentProject['id']);
		$story->setProject($project);

		$this->storyDAO->save($story);
		
		
		return $story;
		
	}
	
	public function findAvailable($projectId) {
		return $this->storyDAO->findByAvailable($projectId);
	}
	
	public function arrayToStory($data) {
		$story = new Story();
		
		if (!empty($data['id'])) {
			$story->setId($data['id']);
		}
		$story->setDescription(htmlentities(nl2br($data['description'])));
		$story->setName($data['name']);
		$story->setPoint($data['point']);
		$story->setStatus($data['status']);
		$story->setCreateAt(new DateTime());
		$story->setUser($this->userDAO->findByPrimaryKey(1));		
		
		$story->setCategory($this->categoryDAO->findByPrimaryKey($data['category']));

		return $story;
	}

}