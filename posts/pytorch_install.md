---
title: 安装pytorch
date: 'Feburary 19, 2022'
summary: '安装pytorch'
imgUrl: 'https://vip2.loli.io/2022/10/22/6qCKI5MitL2lwB3.jpg'
description: 'conda 安装pytorch'
tags: ['pytorch', 'conda']
---

![pytorch](https://vip2.loli.io/2022/10/22/6qCKI5MitL2lwB3.jpg)

# 安装 pytorch

## 安装 conda

- anaconda 官网下载安装对应系统的 anaconda 或者 miniconda
  > miniconda 一般适用与终端用户
- conda init
  > 初始化对应终端下的 conda, 比如 windows: cmd

```bash
conda init
```

## 创建并激活环境

- conda create -n name python=3.10

```bash
conda create -n torch python=3.10
```

- conda activate virtualenv

```bash
conda activate torch
```

## conda 安装 pytorch

- 在 pytorch 官网选择安装稳定版本，复制命令
  ![Screenshot 2022-10-22 at 09-09-31 PyTorch.png](https://vip2.loli.io/2022/10/22/zifC1Y6F4AanDSl.png)

```bash
conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch
```

- 这样就算安装成功
