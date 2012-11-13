<?php

/**
 * Classe responsavel por fazer manipulacoes de datas.
 * @author Rafael
 *
 */
class Dateutil {
	
	/**
	 * Transforma uma string no format d/m/y para um objeto DateTime.
	 * @param String $strDate
	 * @param String $time format hour:minute:second
	 */
	public function strToDate($strDate, $time = null) {
		$dateTime = new DateTime();
		$strDateData = explode("/", $strDate);
		$dateTime->setDate($strDateData[2], $strDateData[1], $strDateData[0]);
		
		if (!empty($time)) {
			$timeData = explode(":", $time);
			$dateTime->setTime($timeData[0], $timeData[1], $timeData[2]);
		}
		
		return $dateTime;
	}
	
}