package com.example.emlak.services;

import com.example.emlak.entities.HeatType;
import com.example.emlak.entities.PropertyType;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface PropertyTypeService {
    List<PropertyType> getAllPropertyTypes();
    PropertyType createPropertyType(@RequestBody PropertyType propertyType);
    PropertyType updatePropertyType(Long propertyTypeId, @RequestBody PropertyType propertyType);
    Boolean deletePropertyType(Long propertyTypeId);
}