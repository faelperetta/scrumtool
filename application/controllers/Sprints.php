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
	
	public function delete() {
		$data = (array) json_decode($_POST['data']);
		$this->sprintModel->delete($data);
	}
	
	public function teste() {
		$dataInicial = new DateTime('2009-08-24');
		$dataFinal = new DateTime('2010-05-31');
		$diff = $dataInicial->diff($dataFinal);
		echo $numDias = $diff->days;
		//echo $dataInicial->format('l');
		
		$hours = 0;
		for ($i = 1; $i <= $numDias; $i++) {
			$weekDay = $dataInicial->format('l');
			if ($weekDay != 'Saturday' && $weekDay != 'Sunday') {
				$hours += 6;
			}
			$dataInicial->add(new DateInterval('P1D'));
		}
		
		echo 'Total de Horas ' . $hours;
		echo "<pre>";
		print_r($diff);
	}
	
}