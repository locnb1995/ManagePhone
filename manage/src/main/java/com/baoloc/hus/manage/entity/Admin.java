package com.baoloc.hus.manage.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "admins")
public class Admin
{
	@Id
	private Long id;
	@Column(name = "username")
	private String username;
	@Column(name = "password")
	private String password;
	@OneToOne
	@JoinColumn(name = "admin_role", referencedColumnName = "id")
	private AdminRole adminRole;

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public String getUsername()
	{
		return username;
	}

	public void setUsername(String username)
	{
		this.username = username;
	}

	public String getPassword()
	{
		return password;
	}

	public void setPassword(String password)
	{
		this.password = password;
	}

	public AdminRole getAdminRole()
	{
		return adminRole;
	}

	public void setAdminRole(AdminRole adminRole)
	{
		this.adminRole = adminRole;
	}
}
