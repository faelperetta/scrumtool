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
		$currentProject = $this->session->userdata('currentProject');
		$sprintList = $this->sprintModel->findByProject($currentProject['id']);
		echo $this->utils->returnsSuccess($sprintList);
	}
	
	public function save() {
		$data = (array) json_decode($_POST['data']);
		$sprint = $this->sprintModel->save($data);
		echo $this->utils->returnsSuccess($sprint);
	}
	
	public function burndown() {
		$sprintId = $_GET['sprintId'];
		$sprint = $this->sprintModel->findByPrimaryKey($sprintId);
		
		$totalDeHoras = $this->sprintModel->getTotalHours($sprintId);
		$hoursPerDay = $this->sprintModel->getHoursDonePerDay($sprintId);
		
		$this->generateburndown->setSprint($sprint);
		$this->generateburndown->setTotalOfHours($totalDeHoras);
		$this->generateburndown->setHoursDonePerDay($hoursPerDay);
		
		echo json_encode($this->generateburndown->generate());
	}
	
}