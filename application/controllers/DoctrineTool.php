<?php
use Doctrine\ORM\Tools\EntityGenerator;
use Doctrine\ORM\Mapping\Driver\DatabaseDriver;
use Doctrine\ORM\Tools\DisconnectedClassMetadataFactory;

class DoctrineTool extends CI_Controller {

	public function __construct() {
		parent::__construct();
	}

	public function index() {
		echo "Doctrine Tool!!!";
	}
	
	public function generateEntities() {

		$em = $this->doctrine->em;

		$driver = new DatabaseDriver($em->getConnection()->getSchemaManager());
		$em->getConfiguration()->setMetadataDriverImpl($driver);

		$cmf = new DisconnectedClassMetadataFactory();
		$cmf->setEntityManager($em);
		$metadata = $cmf->getAllMetadata();

		$classes = $driver->getAllClassNames();

		foreach ($classes as $class) {
			$metadata[] = $cmf->getMetadataFor($class);
		}

		$metadata = $cmf->getAllMetadata();
		$generator = new EntityGenerator();
		$generator->setUpdateEntityIfExists(false);
		$generator->setGenerateStubMethods(true);
		$generator->setGenerateAnnotations(true);
		$generator->generate($metadata, APPPATH . '/models/entities');
	}

}