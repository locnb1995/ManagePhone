package com.baoloc.hus.manage.serviceImpl;

import org.springframework.stereotype.Service;

import com.baoloc.hus.manage.service.entityService.OrderService;

@Service
public class OrderServiceImpl extends OrderService
{
	public String getType()
	{
		return "order";
	}
}
