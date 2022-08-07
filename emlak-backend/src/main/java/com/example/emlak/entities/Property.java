package com.example.emlak.entities;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
public class Property implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    private Company company;
    @ManyToOne(fetch = FetchType.LAZY)
    private PropertyType propertyType;
    private Boolean isFurnished;
    private String title;
    private int squareMeter;
    private int roomNumber;
    private int totalFloor;
    private int currentFloor;
    private String address;
    private float price;
    private String details;
    @ManyToOne(fetch = FetchType.LAZY)
    private HeatType heatType;
    @ManyToOne(fetch = FetchType.LAZY)
    private AdvertisementType advertisementType;
    @CreationTimestamp
    @Column(name = "created_at", updatable = false, nullable = false)
    private Date createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private Date updatedAt;
}
