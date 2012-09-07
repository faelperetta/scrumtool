<?php

class Utils {
	
	private function objectArray( $object ) {
	
		if ( is_array( $object ))
			return $object ;
		 
		if ( !is_object( $object ))
			return false ;
		 
		$serial = serialize( $object ) ;
		$serial = preg_replace( '/O:\d+:".+?"/' ,'a' , $serial ) ;
		if( preg_match_all( '/s:\d+:"\\0.+?\\0(.+?)"/' , $serial, $ms, PREG_SET_ORDER )) {
			foreach( $ms as $m ) {
				$serial = str_replace( $m[0], 's:'. strlen( $m[1] ) . ':"'.$m[1] . '"', $serial ) ;
			}
		}
		 
		return @unserialize( $serial ) ;
	
	}
	
	public function jsonEncode($object) {
		$jsonData = null;
		if (!is_array($object)) {
			$jsonData = $this->objectArray($object);
		} else {
			$jsonData = array();
			
			foreach ($object as $obj) {
				$jsonData[] = $this->objectArray($obj);	
			}
		}
		
		return json_encode($jsonData);
	}
	
	public function convertToArray($data) {
		$result = null;
		
		if (is_array($data)) {
			$result = array();
			foreach($data as $item) {
				$result[] = $item->toArray();
			}			
		} else {
			$result = $data->toArray();
		}
		
		return $result;
	}
	
	public function returnsSuccess($data) {
		$return = array(
			'success' => true,
			'result' => $this->convertToArray($data)
		);
		
		return json_encode($return);
	}
	
}