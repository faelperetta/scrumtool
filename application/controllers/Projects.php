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
	
	public function testSave() {
		$project = new Project();
		$project->setName("ScrumTool");
		$this->projectModel->save($project);		
		echo $project->getId() . ' - ' . $project->getName() . '<br />';
	}
	
}