<?php

/**
 * @property ProjectModel $projectModel
 * @property Utils $utils
 * @author Rafael
 *
 */
use models\entities\Project;

class Projects extends CI_Controller {
	
	public function __construct() {
		parent::__construct();
		$this->load->model("ProjectModel", "projectModel");
	}
	
	public function all() {
		$projects = $this->projectModel->findAll();
		echo $this->utils->returnsSuccess($projects);
		
	}
	
	public function save() {
		$data = (array) json_decode($_POST['data']);
		$project = $this->projectModel->save($data);
		echo $this->utils->returnsSuccess($project);
	}
	
	public function statistics($id) {
		echo json_encode($this->projectModel->getStatistics($id));
	}
	
	public function delete() {
		$data = (array) json_decode($_POST['data']);
		$project = $this->projectModel->delete($data);
		echo "ok";
	}
	
}