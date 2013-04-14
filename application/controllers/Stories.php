<?php


/**
 * @property StoryModel $storyModel
 * @property Utils $utils
 * @author Rafael
 *
 */
class Stories extends CI_Controller {
	
	public function __construct() {
		parent::__construct();
		$this->load->model('StoryModel', 'storyModel');
	}
	
	public function all() {		
		//header('Content-type: application/json');
		$currentProject = $this->session->userdata('currentProject');
		$stories = $this->storyModel->findByProject($currentProject['id']);
		echo $this->utils->returnsSuccess($stories);
	}
	
	public function save() {
		$data = (array) json_decode($_POST['data']);
		$story = $this->storyModel->save($data);
		echo $this->utils->returnsSuccess($story);
	}
	
	public function delete() {
		$data = (array) json_decode($_POST['data']);
		$story = $this->storyModel->delete($data);
	}
	
	public function availables() {
		$currentProject = $this->session->userdata('currentProject');
		$stories = $this->storyModel->findAvailable($currentProject['id']);
		echo $this->utils->returnsSuccess($stories);
	}
	
}