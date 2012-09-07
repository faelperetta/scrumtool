<?php

namespace models\entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Story
 *
 * @Table(name="story")
 * @Entity
 */
class Story
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
     * @Column(name="name", type="string", length=45, nullable=false)
     */
    private $name;

    /**
     * @var text $description
     *
     * @Column(name="description", type="text", nullable=false)
     */
    private $description;

    /**
     * @var string $status
     *
     * @Column(name="status", type="string", length=30, nullable=false)
     */
    private $status;

    /**
     * @var integer $point
     *
     * @Column(name="point", type="integer", nullable=true)
     */
    private $point;

    /**
     * @var datetime $createAt
     *
     * @Column(name="create_at", type="datetime", nullable=false)
     */
    private $createAt;

    /**
     * @var Category
     *
     * @ManyToOne(targetEntity="Category")
     * @JoinColumns({
     *   @JoinColumn(name="category_id", referencedColumnName="id")
     * })
     */
    private $category;

    /**
     * @var Sprint
     *
     * @ManyToOne(targetEntity="Sprint")
     * @JoinColumns({
     *   @JoinColumn(name="sprint_id", referencedColumnName="id")
     * })
     */
    private $sprint;

    /**
     * @var Project
     *
     * @ManyToOne(targetEntity="Project")
     * @JoinColumns({
     *   @JoinColumn(name="project_id", referencedColumnName="id")
     * })
     */
    private $project;

    /**
     * @var User
     *
     * @ManyToOne(targetEntity="User")
     * @JoinColumns({
     *   @JoinColumn(name="user_id", referencedColumnName="id")
     * })
     */
    private $user;


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

    /**
     * Set description
     *
     * @param text $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Get description
     *
     * @return text 
     */
    public function getDescription()
    {
        return htmlspecialchars_decode($this->description);
    }

    /**
     * Set status
     *
     * @param string $status
     */
    public function setStatus($status)
    {
        $this->status = $status;
    }

    /**
     * Get status
     *
     * @return string 
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set point
     *
     * @param integer $point
     */
    public function setPoint($point)
    {
        $this->point = $point;
    }

    /**
     * Get point
     *
     * @return integer 
     */
    public function getPoint()
    {
        return $this->point;
    }

    /**
     * Set createAt
     *
     * @param datetime $createAt
     */
    public function setCreateAt($createAt)
    {
        $this->createAt = $createAt;
    }

    /**
     * Get createAt
     *
     * @return datetime 
     */
    public function getCreateAt()
    {
        return $this->createAt;
    }

    /**
     * Set category
     *
     * @param Category $category
     */
    public function setCategory($category)
    {
        $this->category = $category;
    }

    /**
     * Get category
     *
     * @return Category 
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Set sprint
     *
     * @param Sprint $sprint
     */
    public function setSprint(\Sprint $sprint)
    {
        $this->sprint = $sprint;
    }

    /**
     * Get sprint
     *
     * @return Sprint 
     */
    public function getSprint()
    {
        return $this->sprint;
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

    /**
     * Set user
     *
     * @param User $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }

    /**
     * Get user
     *
     * @return User 
     */
    public function getUser()
    {
        return $this->user;
    }
    
    
    public function toArray() {
    	return array(
    			'id' => $this->getId(),
    			'name' => $this->getName(),
    			'description' => $this->getDescription(),
    			'status' => $this->getStatus(),
    			'point' => $this->getPoint(),
    			'createdAt' => $this->getCreateAt()->format('d/m/Y h:i:s'),
    			'user' => $this->getUser()->toArray(),
    			'category' => $this->category->toArray()
    	);
    }
}