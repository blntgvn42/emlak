package com.example.emlak.services;

import com.example.emlak.entities.HeatType;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface HeatTypeService {
    List<HeatType> getAllHeatTypes();
    HeatType createHeatType(@RequestBody HeatType heatType);
    HeatType updateHeatType(Long heatTypeId, @RequestBody HeatType heatType);
    Boolean deleteHeatType(Long heatTypeId);
}