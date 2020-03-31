package com.baoloc.hus.manage.serviceImpl;

import org.springframework.stereotype.Service;

import com.baoloc.hus.manage.service.entityService.CustomerService;

@Service
public class CustomerServiceImpl extends CustomerService
{
	public String getType()
	{
		return "customer";
	}
}
