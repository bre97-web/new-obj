package com.mapper;

import com.pojo.User;
import org.springframework.stereotype.Repository;

@Repository
public interface loginMapper {
    int login(User user);
}
