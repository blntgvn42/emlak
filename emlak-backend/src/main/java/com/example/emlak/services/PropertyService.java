package com.example.emlak.services;

import com.example.emlak.dto.PropertyDTO;
import com.example.emlak.entities.Property;

import java.util.List;

public interface PropertyService {
    List<PropertyDTO> getAllProperties();
    Property createProperty(Property property, Long companyId, Long advertisementTypeId, Long propertyTypeId, Long heatTypeId);
}
