package com.example.emlak.dto;

import com.example.emlak.entities.Customer;
import lombok.Data;

import java.util.List;

@Data
public class CompanyCustomerDTO {
    private Long id;
    private String name;
    private String address;
    private String phone;
    private String email;
    private String website;
    private List<Customer> employees;
}
