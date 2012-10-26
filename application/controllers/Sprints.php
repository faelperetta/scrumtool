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
	
	public function save() {
		$data = (array) json_decode($_POST['data']);
		//$sprint = $this->sprintModel->save($data);
		$sprint = null;
		$this->utils->returnsSuccess($sprint);
	}
	
}