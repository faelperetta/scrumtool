<?php


/**
 * @property UserModel $userModel
 * @property Utils $utils
 * @author Rafael
 *
 */
class Users extends CI_Controller {
	
	public function __construct() {
		parent::__construct();
		
		$this->load->model('UserModel', 'userModel');
	}
	
	public function all() {
		$userList = $this->userModel->findAll();
		echo $this->utils->returnsSuccess($userList);
	}
	
	public function save() {
		$data = (array) json_decode($_POST['data']);
		$user = $this->userModel->save($data);
		echo $this->utils->returnsSuccess($user);
	}
	
	public function login() {
		$username = $_POST['username'];
		$password = $_POST['password'];
		
		$user = $this->userModel->login($username, $password);
		
		if ($user != null) {
			$this->session->set_userdata('user', $user->toArray());
			$result['success'] = TRUE;
			$result['user'] = $user->toArray();
			echo json_encode($result);
		} else {
			echo json_encode(array('success' => false));
		}
		
	}
	
	public function isLogged() {
		$user = $this->session->userdata('user');
		if ($user) {
			echo json_encode($user);
		} else {
			echo "";
		}
	}
	
}