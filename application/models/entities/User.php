<?php

namespace models\entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * @Table(name="user")
 * @Entity
 */
class User
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
    
    public function toArray() {
    	return array(
    				'id' => $this->id,
    				'name' => $this->name,
    				'email' => $this->email
    			);
    }
}