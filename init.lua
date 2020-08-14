return setmetatable({}, {
	__index = function(self, serviceName)
		if game:FindService(serviceName) ~= nil then
			local service = game:GetService(serviceName)
			self[serviceName] = service
			return service
		else
			error("'" .. tostring(serviceName) .. "'" .. "is not a valid Service name")
		end
	end
})
