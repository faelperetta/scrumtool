<?php
namespace models\dao;

use models\dao\GenericDAO;

class UserDAO extends GenericDAO {
	
	private static $ENTITY = 'models\entities\User';
	
	public function findByPrimaryKey($id) {
		return parent::findByPrimaryKey(self::$ENTITY, $id);
	}
	
	public function save($usuario) {
		parent::save($usuario);
	}
	
	public function delete($usuario) {
		parent::delete($usuario);
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
	
}