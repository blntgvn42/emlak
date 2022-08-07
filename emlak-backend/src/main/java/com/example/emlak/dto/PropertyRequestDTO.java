package com.example.emlak.dto;


import com.example.emlak.entities.Property;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PropertyRequestDTO {
    Property property;
    Long companyId;
    Long heatTypeId;
    Long advertisementTypeId;
    Long propertyTypeId;
}