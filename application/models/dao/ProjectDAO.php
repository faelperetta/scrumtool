<?php

namespace models\dao;
use models\entities\Project;
use Doctrine\ORM\Query\ResultSetMapping;

use models\dao\GenericDAO;

class ProjectDAO extends GenericDAO {
	
	private static $ENTITY = 'models\entities\Project';
	
	public function findByPrimaryKey($id) {
		return parent::findByPrimaryKey(self::$ENTITY, $id);
	}
	
	public function findAll() {
		return parent::findAll(self::$ENTITY);
	}
	
	public function save(Project $project) {
		parent::save($project);
	}
	
	public function delete(Project $project) {
		parent::delete($project);
	}
	
	public function getStatistics($projectId) {
		$rsm = new ResultSetMapping();
		$rsm->addScalarResult('total', 'total');
		
		$allResults = array();
		
		$sqlTotalSprintFinished = 'select count(id) total from sprint where end_date <= now() and project_id = ?';
		$query = $this->entityManager->createNativeQuery($sqlTotalSprintFinished, $rsm);
		$query->setParameter(1, $projectId);
		$result = $query->getSingleResult();
		$allResults['totalSprintsFinished'] = $result['total'];
		
		$sqlTotalSprintRunning = 'select count(id) total from sprint where end_date > now() and project_id = ?';
		$query = $this->entityManager->createNativeQuery($sqlTotalSprintRunning, $rsm);
		$query->setParameter(1, $projectId);
		$result = $query->getSingleResult();
		$allResults['totalSprintsRunning'] = $result['total'];
		
		$sqlTotalStories = 'select count(id) total from story where project_id = ?';
		$query = $this->entityManager->createNativeQuery($sqlTotalStories, $rsm);
		$query->setParameter(1, $projectId);
		$result = $query->getSingleResult();
		$allResults['totalStories'] = $result['total'];
		
		return $allResults;
	}
	
}