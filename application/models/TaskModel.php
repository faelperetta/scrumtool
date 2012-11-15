<?php

use models\entities\Task;

use models\dao\TaskDAO;

/**
 * @property TaskDAO $taskDAO
 * @property StoryModel $storyModel
 * @property UserModel $userModel
 * @author Rafael
 *
 */
class TaskModel extends CI_Model {
	
	private $taskDAO;
	
	public function __construct() {
		parent::__construct();
		$this->load->model("StoryModel", "storyModel");
		$this->load->model("UserModel", "userModel");
		$this->taskDAO = new TaskDAO($this->doctrine->em);
	}
	
	public function findByPrimaryKey($id) {
		return $this->taskDAO->findByPrimaryKey($id);
	}
	
	public function findAll() {
		return $this->taskDAO->findAll();
	}
	
	public function findBySprint($sprintId) {
		return $this->taskDAO->findBySprint($sprintId);
	}
	
	public function save($data) {
		$task = $this->arrayToTask($data);
		$this->taskDAO->save($task);
		return $task;
	}
	
	public function delete($task) {
		$this->taskDAO->delete($task);
	}	
	
	public function arrayToTask($data) {
		$task = new Task();
		if (!empty($data['id'])) {
			$task->setId($data['id']);
		}
		
		$task->setDescription($data['description']);
		$task->setHours($data['hours']);
		$task->setStatus($data['status']);
		
		$story = (array) $data['story'];
		$task->setStory($this->storyModel->arrayToStory($story));
		
		$user = (array) $data['user'];
		$task->setUser($this->userModel->arrayToUser($user));
		
		return $task;
	}
	
}