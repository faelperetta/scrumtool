<?php
namespace models\dao;

/**
 * @property EntityManager $entityManager
 * @author Rafael
 *
 */
class GenericDAO {

	protected $entityManager;

	public function __construct($em) {
		$this->entityManager = $em;
	}

	protected function findByPrimaryKey($entity, $id) {
		return $this->entityManager->find($entity, $id);
	}

	public function save($entity) {
		$this->entityManager->merge($entity);
		$this->entityManager->flush();
	}

	public function delete($entity) {
		$this->entityManager->remove($entity);
		$this->entityManager->flush();
	}

	protected function findAll($entity) {
		$query = $this->entityManager->createQuery("SELECT e FROM ". $entity . " e");
	 	return $query->getResult();
	}

}