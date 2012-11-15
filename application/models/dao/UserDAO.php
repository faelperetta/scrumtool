<?php
namespace models\dao;

use models\entities\User;
use models\dao\GenericDAO;

class UserDAO extends GenericDAO {
	
	private static $ENTITY = 'models\entities\User';
	
	public function findByPrimaryKey($id) {
		return parent::findByPrimaryKey(self::$ENTITY, $id);
	}
	
	public function save(User $user) {
		parent::save($user);
	}
	
	public function delete(User $user) {
		parent::delete($user);
	}
	
	public function findAll() {
		return parent::findAll(self::$ENTITY);
	}
	
	public function login($username, $password) {
		$dql = "SELECT U FROM " . self::$ENTITY . " U WHERE U.email = '$username' AND U.password = '$password'";
		$query = $this->entityManager->createQuery($dql);
		$users = $query->getResult();
		return $users;
	}
	
	public function findByProject($projectId) {
		$dql = "SELECT u FROM " . self::$ENTITY . " u JOIN u.projects p WHERE p = $projectId";
		$query = $this->entityManager->createQuery($dql);
		$users = $query->getResult();
		return $users;
	}
	
}