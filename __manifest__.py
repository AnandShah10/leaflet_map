# -*- coding: utf-8 -*-
{
    'name': 'leaflet_map',
    'version': '1.0',
    'summary': "Map View",
    'sequence': 10,
    'author': "Anand Shah",
    # 'category':'Hidden',
    'description': """
Map View Using Leaflet
""",
    'category': 'Custom/view',
    'depends': ['base','web'],
    'data': [
    ],
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
    'assets':{
        'web.assets_backend':['leaflet_map/static/src/*'],
    },
}
