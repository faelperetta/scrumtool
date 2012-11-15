<?php

/**
 * @property TaskModel $taskModel
 * @author Rafael
 *
 */
class Tasks extends CI_Controller {
	
	public function __construct() {
		parent::__construct();
		$this->load->model("TaskModel", "taskModel");
	}
	
	
	public function all() {
		$taskList = $this->taskModel->findBySprint($_GET['storyId']);
		echo $this->utils->returnsSuccess($taskList);
	}
	
	public function save() {
		$data = (array) json_decode($_POST['data']);
		$task = $this->taskModel->save($data);
		echo $this->utils->returnsSuccess($task);
	}
}