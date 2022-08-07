package com.example.emlak.dto;

import lombok.Data;

@Data
public class CustomerDTO {
    private Long id;
    private String name;
    private String phone;
    private String email;
    private Boolean isExecutive;
    private Long company_id;
}
