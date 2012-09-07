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
	
	public function index() {
		$taskList = $this->taskModel->findAll();
		echo count($taskList);
	}
}