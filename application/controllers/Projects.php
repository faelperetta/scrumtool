<?php

/**
 * @property ProjectModel $projectModel
 * @author Rafael
 *
 */
use models\entities\Project;

class Projects extends CI_Controller {
	
	public function __construct() {
		parent::__construct();
		$this->load->model("ProjectModel", "projectModel");
	}
	
	public function index() {
		$projectList = $this->projectModel->findAll();
		foreach ($projectList as $project) {
			echo $project->getId() . ' - ' . $project->getName() . '<br />';
		}
	}
	
	public function testSave() {
		$project = new Project();
		$project->setName("ScrumTool");
		$this->projectModel->save($project);		
		echo $project->getId() . ' - ' . $project->getName() . '<br />';
	}
	
}