# -*- coding: utf-8 -*-

from odoo import http
from odoo.http import request

class PublicComponents(http.Controller):
    @http.route('/public-components', auth='user', website=True)
    def public_components(self):
        template='ajscript.website_public_component'

        return request.render(template)