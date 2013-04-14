<?php

namespace models\entities;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * @Table(name="user")
 * @Entity
 */
class User
{
	
	public function __construct() {
		$this->projects = new ArrayCollection();
	}
	
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
     * @var string $email
     *
     * @Column(name="email", type="string", length=45, nullable=false)
     */
    private $email;

    /**
     * @var string $password
     *
     * @Column(name="password", type="string", length=40, nullable=false)
     */
    private $password;

    
    /**
     * @ManyToMany(targetEntity="Project", cascade={"persist"})
     * @JoinTable(name="project_user",
     *      joinColumns={@JoinColumn(name="user_id", referencedColumnName="id")},
     *      inverseJoinColumns={@JoinColumn(name="project_id", referencedColumnName="id")}
     *      )
     */
    private $projects;
    
    /**
     * @var string $role
     *
     * @Column(name="role", type="string", length=40, nullable=false)
     */
    private $role;
    

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
     * Set email
     *
     * @param string $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * Get email
     *
     * @return string 
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set password
     *
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**
     * Get password
     *
     * @return string 
     */
    public function getPassword()
    {
        return $this->password;
    }
    
    
    public function setProjects($projects) {
    	$this->projects = $projects;
    }
    
    public function getProjects() {
    	return $this->projects;
    }
    
    public function setRole($role) {
    	$this->role = $role;
    }
    
    public function getRole() {
    	return $this->role;
    }
    
    public function addProject(Project $project) {
    	//$project->addUser($this);
    	$this->projects->add($project);
    }
    
    public function toArray() {
    	$userArray = array(
    				'id' => $this->id,
    				'name' => $this->name,
    				'email' => $this->email,
    				'role' => $this->role
    			);
    	
    	if ($this->projects != null) {    		
	    	foreach ($this->projects as $project) {
	    		$userArray['projects'][] = $project->toArray();
	    	}
    	}
    	
    	return $userArray;
    }
}