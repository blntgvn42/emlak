package com.example.emlak.services;

import com.example.emlak.entities.AdvertisementType;

import java.util.List;

public interface AdvertisementTypeService {
    List<AdvertisementType> getAllAdvertisementTypes();
    AdvertisementType createAdvertisementType(AdvertisementType advertisementType);
    AdvertisementType updateAdvertisementType(Long advertisementTypeId, AdvertisementType advertisementType);
    Boolean deleteAdvertisementType(Long advertisementTypeId);
}
