<?php

namespace models\entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Sprint
 *
 * @Table(name="sprint")
 * @Entity
 */
class Sprint
{
    /**
     * @var integer $id
     *
     * @Column(name="id", type="integer", nullable=false)
     * @Id
     * @GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string $name
     *
     * @Column(name="name", type="string", length=45, nullable=true)
     */
    private $name;

    
    /**
     * 
     * @OneToMany(targetEntity="Story", mappedBy="sprint")
     */
    private $stories;
    

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }
    
    public function setStories($stories) {
    	$this->stories = $stories;
    }
    
    public function getStories() {
    	return $this->stories;
    }
    
    public function toArray() {
    	return array(
    				'id' => $this->id,
    				'name' => $this->name
    			);
    }
}