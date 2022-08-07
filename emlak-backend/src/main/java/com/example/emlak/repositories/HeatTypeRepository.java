package com.example.emlak.repositories;

import com.example.emlak.entities.HeatType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HeatTypeRepository extends JpaRepository<HeatType, Long> {

}


