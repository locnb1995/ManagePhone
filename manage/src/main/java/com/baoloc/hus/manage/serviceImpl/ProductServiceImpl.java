package com.baoloc.hus.manage.serviceImpl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.baoloc.hus.manage.commons.AppConstants;
import com.baoloc.hus.manage.data.ResponseResult;
import com.baoloc.hus.manage.entity.Product;
import com.baoloc.hus.manage.enums.ResponseStatus;
import com.baoloc.hus.manage.repository.ProductRepository;
import com.baoloc.hus.manage.service.entityService.ProductService;

@Service
public final class ProductServiceImpl extends ProductService
{
	@Autowired
	private ProductRepository productRepository;

	public String getType()
	{
		return "product";
	}

	public ResponseResult getProductByName(String name)
	{
		try
		{
			Collection<Product> result = this.productRepository
					.getProductByName(name);
			if (result.isEmpty())
			{
				return new ResponseResult(ResponseStatus.ERROR, null,
						AppConstants
								.get_find_data_error_message(this.getType()));
			}
			return new ResponseResult(ResponseStatus.SUCCESS, result, null);
		}
		catch (Exception e)
		{
			return new ResponseResult(ResponseStatus.ERROR, null,
					e.getLocalizedMessage());
		}
	}
}
