<?php


/**
 * @property UserModel $userModel
 * @property ProjectModel $projectModel
 * @property Utils $utils
 * @author Rafael
 *
 */
class Users extends CI_Controller {
	
	public function __construct() {
		parent::__construct();
		
		$this->load->model('UserModel', 'userModel');
		$this->load->model('ProjectModel', 'projectModel');
		$this->load->helper('url');
	}
	
	public function all() {
		$userList = $this->userModel->findAll();
		echo $this->utils->returnsSuccess($userList);
	}
	
	public function projectUsers() {
		$currentProject = $this->session->userdata('currentProject');
		$userList = $this->userModel->findByProject($currentProject['id']);
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
			
			$this->session->set_userdata('currentProject', $user->getProjects()->get(0)->toArray());
			
			
			$result['success'] = TRUE;
			$result['user'] = $user->toArray();
			$result['user']['currentProject'] = $this->session->userdata('currentProject');
			$result['user']['currentProject']['statistics'] = $this->projectModel->getStatistics($result['user']['currentProject']['id']);
			echo json_encode($result);
		} else {
			echo json_encode(array('success' => false));
		}
		
	}
	
	public function isLogged() {
		$user = $this->session->userdata('user');
		if ($user) {
			$user['currentProject'] = $this->session->userdata('currentProject');
			$user['currentProject']['statistics'] = $this->projectModel->getStatistics($user['currentProject']['id']);
			echo json_encode($user);
		} else {
			echo "";
		}
	}
	
	public function logout() {
		$this->session->unset_userdata('user');
		$this->session->unset_userdata('currentProject');
		redirect('/home');
	}
	
	public function changeProject() {
		$project = $this->projectModel->findByPrimaryKey($_POST['projectId']);
		if (!empty($project)) {
			$this->session->set_userdata('currentProject', $project->toArray());
			echo "ok";		
		}
	}
	
	public function delete() {
		$data = (array) json_decode($_POST['data']);
		$user = $this->userModel->delete($data);
		echo "ok";
	}
	
	
}