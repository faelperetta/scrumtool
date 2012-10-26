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
		$stories = $this->storyModel->findAll();
		echo $this->utils->returnsSuccess($stories);
	}
	
	public function save() {
		$data = (array) json_decode($_POST['data']);
		$story = $this->storyModel->save($data);
		echo $this->utils->returnsSuccess($story);
	}
	
}