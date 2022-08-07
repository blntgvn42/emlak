package com.example.emlak.dto;


import lombok.Data;

import java.util.Date;


@Data
public class PropertyDTO {
    private Long id;
    private Long company_id;
    private Long property_type_id;
    private Long advertisement_type_id;
    private Long heat_type_id;
    private Boolean isFurnished;
    private String title;
    private int squareMeter;
    private int roomNumber;
    private int totalFloor;
    private int currentFloor;
    private String address;
    private float price;
    private String details;
    private Date created_at;
    private Date updated_at;
}