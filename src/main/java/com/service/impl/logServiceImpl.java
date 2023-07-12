package com.service.impl;

import com.mapper.UserMapper;
import com.mapper.loginMapper;
import com.mybatisutil.MybatisUtil;
import com.pojo.User;
import com.service.logService;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public class logServiceImpl implements logService {
    SqlSession sqlSession = MybatisUtil.getSqlSession();
    loginMapper logMapper = sqlSession.getMapper(loginMapper.class);
    @Override
    public boolean login(User user) {
        boolean flag = logMapper.login(user)>0;
        return flag;
    }
}
