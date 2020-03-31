package com.baoloc.hus.manage.serviceImpl;

import org.springframework.stereotype.Service;

import com.baoloc.hus.manage.service.entityService.AdminService;

@Service
public class AdminServiceImpl extends AdminService
{
	public String getType()
	{
		return "admintrators";
	}
}
