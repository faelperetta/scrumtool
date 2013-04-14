<?php

use models\entities\Sprint;

class GenerateBurndown {
	
	private $sprint;
	private $totalOfHours;
	private $hoursDonePerDay;
	
	public function __construct() {
	
	}
	
	public function setSprint(Sprint $sprint) {
		$this->sprint = $sprint;
	}
	
	public function setTotalOfHours($totalOfHours) {
		$this->totalOfHours = $totalOfHours;		
	}
	
	public function setHoursDonePerDay($hoursDonePerDay) {
		$this->hoursDonePerDay = $hoursDonePerDay;
	}
		
	public function totalOfDays() {
		return $this->sprint->getStartDate()->diff($this->sprint->getEndDate())->d;
	}
	
	public function generate() {
		$totalOfHours = (int) $this->totalOfHours;
		$totalOfDays = $this->totalOfDays();
		
		$startDate = $this->sprint->getStartDate();	
		$hoursPerDay = ($totalOfHours/ $totalOfDays);
		$totalOfHoursDone = $totalOfHours;
		
		$currentDate = new DateTime();
		$data = array();
		for ($i = 0; $i <= $totalOfDays; $i++) {
			
			
			$day = $startDate->format('d/m/Y');
			$data[$i]  = array(
						'name' => $day,
						'planned' => $totalOfHours
					);
				
			$totalOfHours -= $hoursPerDay;
			
			if ($currentDate >= $startDate) {
				if (isset($this->hoursDonePerDay[$day])) {
					$totalOfHoursDone -= $this->hoursDonePerDay[$day];
				}
				
				$data[$i]['done'] = $totalOfHoursDone;								
			}
			
			$startDate->add(new DateInterval('P1D'));
			
		}
		
		return $data;
	}
	
	
	
}