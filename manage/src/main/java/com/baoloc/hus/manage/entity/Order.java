package com.baoloc.hus.manage.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order
{
	@Id
	private Long id;
	@ManyToOne
	@JoinColumn(name = "product", referencedColumnName = "id")
	private Product product;
	@Column(name = "total")
	private Integer total;
	@Column(name = "total_price")
	private Integer total_price;
	@ManyToOne
	@JoinColumn(name = "customer", referencedColumnName = "id")
	private Customer customer;
	@ManyToOne
	@JoinColumn(name = "process", referencedColumnName = "id")
	private Process process;
	@Column(name = "creation_date")
	private Date creation_date;
	@Column(name = "done_date")
	private Date done_date;

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public Product getProduct()
	{
		return product;
	}

	public void setProduct(Product product)
	{
		this.product = product;
	}

	public Integer getTotal()
	{
		return total;
	}

	public void setTotal(Integer total)
	{
		this.total = total;
	}

	public Integer getTotal_price()
	{
		return total_price;
	}

	public void setTotal_price(Integer total_price)
	{
		this.total_price = total_price;
	}

	public Customer getCustomer()
	{
		return customer;
	}

	public void setCustomer(Customer customer)
	{
		this.customer = customer;
	}

	public Process getProcess()
	{
		return process;
	}

	public void setProcess(Process process)
	{
		this.process = process;
	}

	public Date getCreation_date()
	{
		return creation_date;
	}

	public void setCreation_date(Date creation_date)
	{
		this.creation_date = creation_date;
	}

	public Date getDone_date()
	{
		return done_date;
	}

	public void setDone_date(Date done_date)
	{
		this.done_date = done_date;
	}
}
