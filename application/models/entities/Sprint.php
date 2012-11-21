<?php

namespace models\entities;

use Doctrine\Common\Collections\ArrayCollection;

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
     * @OneToMany(targetEntity="Story", mappedBy="sprint", cascade={"all"})
     */
    private $stories;
    
    
     /**
     * @var datetime $startDate
     *
     * @Column(name="start_date", type="datetime", nullable=true)
     */
    private $startDate;
    
    /**
     * @var datetime $endDate
     *
     * @Column(name="end_date", type="datetime", nullable=true)
     */
    private $endDate;
    
    /**
     * @var Project
     *
     * @ManyToOne(targetEntity="Project")
     * @JoinColumns({
     *   @JoinColumn(name="project_id", referencedColumnName="id")
     * })
     */
    private $project;
    
    
    public function __construct() {
    	$this->stories = new ArrayCollection();
    }
    

    public function setId($id) {
    	$this->id = $id;
    }
    
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
    
    public function setStartDate($startDate) {
    	$this->startDate = $startDate;
    }
    
    public function getStartDate() {
    	return $this->startDate;
    }
    
    public function setEndDate($endDate) {
    	$this->endDate = $endDate;
    }
    
    public function getEndDate() {
    	return $this->endDate;
    }
    
    public function addStory(Story $story) {
    	$this->stories->add($story);
    }
    
    /**
     * Set project
     *
     * @param Project $project
     */
    public function setProject($project)
    {
    	$this->project = $project;
    }
    
    /**
     * Get project
     *
     * @return Project
     */
    public function getProject()
    {
    	return $this->project;
    }
    
    public function toArray() {
    	$sprint =  array(
    				'id' => $this->id,
    				'name' => $this->name,
    				'startDate' => $this->startDate->format('d/m/Y'),
    				'endDate' => $this->endDate->format('d/m/Y')
    			);
    	
    	foreach ($this->stories as $story) {
    		$sprint['stories'][] = $story->toArray();
    	}
    	
    	return $sprint;
    }
}