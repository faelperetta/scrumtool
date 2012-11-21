<?php

namespace models\dao;
use Doctrine\ORM\Query\ResultSetMapping;

use models\dao\GenericDAO;


class SprintDAO extends GenericDAO {
	
	private static $ENTITY = 'models\entities\Sprint';
	
	public function findByPrimaryKey($id) {
		return parent::findByPrimaryKey(self::$ENTITY, $id);
	}
	
	public function findAll() {
		return parent::findAll(self::$ENTITY);
	}
	
	public function save($sprint) {
		parent::save($sprint);
	}
	
	public function delete(Sprint $sprint) {
		parent::delete($sprint);
	}
	
	public function getTotalHours($sprintId) {
		$rsm = new ResultSetMapping();
		$rsm->addScalarResult('totalhours', 'totalHours');
		
		$sql =' select sum(hours) totalhours';
		$sql .='    from task t,';
		$sql .='        story s,';
		$sql .='        sprint sp ';
		$sql .='where ';
		$sql .='    t.story_id = s.id and ';
		$sql .='    s.sprint_id = sp.id and ';
		$sql .='    sp.id = ?';
		
		$query = $this->entityManager->createNativeQuery($sql, $rsm);
		$query->setParameter(1, $sprintId);
		
		$result = $query->getSingleResult();
		return $result['totalHours'];
	}
	
	public function getHoursDonePerDay($sprintId) {
		$rsm = new ResultSetMapping();
		$rsm->addScalarResult('total', 'total');
		$rsm->addScalarResult('completed_at', 'day');
		
		
		$sql =  'select sum(t.hours) as total, date_format(t.completed_at,\'%d/%m/%Y\') completed_at';
		$sql .= '    from task t,';
		$sql .= '        story s,';
		$sql .= '        sprint sp ';
		$sql .= 'where ';
		$sql .= '    t.story_id = s.id and';
		$sql .= '    s.sprint_id = sp.id and';
		$sql .= '    sp.id = ? and';
		$sql .= '    t.completed_at is not null ';
		$sql .= 'group by t.completed_at';

		$query = $this->entityManager->createNativeQuery($sql, $rsm);
		$query->setParameter(1, $sprintId);
		
		$result = $query->getResult();
		
		return $result;
	}
	
	public function findByProject($projectId) {
		$query = $this->entityManager
		->createQuery("SELECT s, p FROM ". self::$ENTITY . " s JOIN s.project p WHERE p.id = " . $projectId);
		return $query->getResult();
	}
	
}