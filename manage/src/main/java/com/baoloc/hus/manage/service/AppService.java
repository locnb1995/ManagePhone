package com.baoloc.hus.manage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import com.baoloc.hus.manage.commons.AppConstants.ResponseStatus;
import com.baoloc.hus.manage.data.ResponseResult;

public abstract class AppService<T, ID>
{
	@Autowired
	private JpaRepository<T, ID> jpaRepository;

	public abstract String getType();

	public ResponseResult getAllEntity()
	{
		try
		{
			return new ResponseResult(ResponseStatus.SUCCESS,
					this.jpaRepository.findAll(), null);
		}
		catch (Exception e)
		{
			return new ResponseResult(ResponseStatus.ERROR, null,
					e.getLocalizedMessage());
		}
	}
}
