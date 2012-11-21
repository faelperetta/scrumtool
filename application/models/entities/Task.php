<?php

namespace models\entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Task
 *
 * @Table(name="task")
 * @Entity
 */
class Task
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
     * @var string $description
     *
     * @Column(name="description", type="string", length=255, nullable=false)
     */
    private $description;
    
    /**
     * @var string $status
     *
     * @Column(name="status", type="string", length=30, nullable=false)
     */
    private $status;

    /**
     * @var integer $hours
     *
     * @Column(name="hours", type="integer", nullable=true)
     */
    private $hours;

    /**
     * @var Story
     *
     * @ManyToOne(targetEntity="Story")
     * @JoinColumns({
     *   @JoinColumn(name="story_id", referencedColumnName="id")
     * })
     */
    private $story;

    /**
     * @var User
     *
     * @ManyToOne(targetEntity="User")
     * @JoinColumns({
     *   @JoinColumn(name="user_id", referencedColumnName="id")
     * })
     */
    private $user;
    
    /**
     * @var datetime $completed_at
     *
     * @Column(name="completed_at", type="datetime", nullable=false)
     */
    private $completedAt;

    
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
     * Set description
     *
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
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
     * Set hours
     *
     * @param integer $hours
     */
    public function setHours($hours)
    {
        $this->hours = $hours;
    }

    /**
     * Get hours
     *
     * @return integer 
     */
    public function getHours()
    {
        return $this->hours;
    }

    /**
     * Set story
     *
     * @param Story $story
     */
    public function setStory(Story $story)
    {
        $this->story = $story;
    }

    /**
     * Get story
     *
     * @return Story 
     */
    public function getStory()
    {
        return $this->story;
    }

    /**
     * Set user
     *
     * @param User $user
     */
    public function setUser(User $user)
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
    
    
    public function setCompletedAt($completedAt) {
    	$this->completedAt = $completedAt;
    }
    
    public function getCompletedAt($completedAt) {
    	return $this->completedAt;
    }
    
    public function toArray() {
    	$task = array(
    			'id' => $this->id,
    			'description' => $this->description,
    			'hours' => $this->hours,
    			'story' => $this->story->toArray(),
    			'status' => $this->status
    	);
    	
    	if ($this->user != null) {
    		$task['user'] = $this->user->toArray();
    	}
    	
    	return $task;
    }
}